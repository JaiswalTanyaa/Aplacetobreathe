import React, { createContext, useContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * AuthContext
 * ──────────
 * Provides `user`, `login(userData)`, and `logout()` to the whole app.
 * user = null  →  logged out
 * user = { name, email, initials }  →  logged in
 *
 * State persists in sessionStorage so a page refresh keeps you logged in
 * for the duration of the browser tab session.
 */

const AuthContext = createContext(null);

function readSession() {
  try {
    const raw = sessionStorage.getItem('auth_user');
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readSession);

  const login = useCallback((userData) => {
    const email = (userData.email || '').trim();

    // Resolve name: use provided name if non-empty,
    // else derive from email prefix ("tanya@gmail.com" → "Tanya"),
    // else fall back to email itself.
    const rawName = (userData.name || '').trim();
    const emailPrefix = email.split('@')[0];
    const resolvedName = rawName
      || (emailPrefix ? emailPrefix.charAt(0).toUpperCase() + emailPrefix.slice(1) : email)
      || 'User';

    const u = {
      name:     resolvedName,
      email,
      initials: resolvedName.charAt(0).toUpperCase(),
    };
    sessionStorage.setItem('auth_user', JSON.stringify(u));
    setUser(u);
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem('auth_user');
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
