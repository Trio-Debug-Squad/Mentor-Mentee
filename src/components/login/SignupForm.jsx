const inputClass =
  "w-full px-4 py-3 bg-white border border-[#E2DDD8] rounded-xl text-[14px] text-[#1A1714] outline-none transition-colors duration-150 font-['DM_Sans',sans-serif] focus:border-[#1A1714]";

export default function SignupForm({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  loading,
  error,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit} className="mt-1">
      {/* Error */}
      {error && (
        <div className="text-[12px] text-[#B91C1C] px-3.5 py-2.5 bg-[#FEF2F2] border border-[#FECACA] rounded-xl mb-3.5 leading-normal">
          {error}
        </div>
      )}

      {/* Full name */}
      <div className="mb-3.5">
        <label className="block text-[12px] font-medium text-[#7A736C] mb-1.5 tracking-[0.04em]">
          Full name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Smith"
          required
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div className="mb-3.5">
        <label className="block text-[12px] font-medium text-[#7A736C] mb-1.5 tracking-[0.04em]">
          Email address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          required
          className={inputClass}
        />
      </div>

      {/* Password */}
      <div className="mb-3.5">
        <label className="block text-[12px] font-medium text-[#7A736C] mb-1.5 tracking-[0.04em]">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
          className={inputClass}
        />
      </div>

      {/* Confirm password */}
      <div className="mb-1.5">
        <label className="block text-[12px] font-medium text-[#7A736C] mb-1.5 tracking-[0.04em]">
          Confirm password
        </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="••••••••"
          required
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 bg-[#1A1714] text-[#F7F4EF] border-none rounded-xl text-[14px] font-medium cursor-pointer font-['DM_Sans',sans-serif] tracking-[0.01em] mt-4 transition-colors duration-150 hover:bg-[#2E2A26] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? "Creating account…" : "Create account"}
      </button>
    </form>
  );
}
