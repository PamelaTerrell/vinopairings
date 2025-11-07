'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function ClientPortal({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;                 // Nothing on server; avoids hydration mismatch
  return createPortal(children, document.body);
}
