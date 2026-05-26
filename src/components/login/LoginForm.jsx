const inputClass =
  "w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-sm text-ink outline-none font-sans transition-colors duration-150 focus:border-ink";

export default function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  loading,
  error,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit} className="mt-1">
      {/* Error */}
      {error && (
        <div className="text-xs text-red-700 px-3.5 py-2.5 bg-red-50 border border-red-200 rounded-xl mb-4 leading-relaxed">
          {error}
        </div>
      )}

      {/* Email */}
      <div className="mb-3.5">
        <label className="block text-xs font-medium text-stone-600 mb-1.5 tracking-wide">
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
      <div className="mb-1">
        <div className="flex justify-between items-center mb-1.5">
          <label className="text-xs font-medium text-stone-600 tracking-wide">
            Password
          </label>
          <a
            href="#"
            className="text-xs text-stone-400 border-b border-stone-300 hover:text-ink hover:border-ink transition-colors"
          >
            Forgot password?
          </a>
        </div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-4 py-3.5 bg-amber text-ink text-sm font-medium rounded-xl border-0 cursor-pointer tracking-wide transition-colors duration-150 hover:bg-amber-hover disabled:opacity-70 disabled:cursor-not-allowed"
        style={{ fontFamily: "inherit" }}
      >
        {loading ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
