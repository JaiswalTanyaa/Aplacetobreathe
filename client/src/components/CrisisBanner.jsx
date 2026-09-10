import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowRight } from 'lucide-react';

export default function CrisisBanner() {
  return (
    <div className="bg-gradient-to-r from-coral/15 via-tertiary-fixed/30 to-coral/10 border-y border-coral/20 py-2.5 px-4 text-center">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm">
        <span className="flex items-center gap-1.5 font-bold text-coral-dark">
          <ShieldAlert className="w-4 h-4" />
          In Crisis?
        </span>
        <span className="text-on-surface">
          Free, confidential mental health support is accessible right now. Call or text <strong>988</strong> anytime.
        </span>
        <Link
          to="/crisis"
          className="inline-flex items-center gap-1 text-coral-dark font-bold hover:underline"
        >
          Immediate Support Hub <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
