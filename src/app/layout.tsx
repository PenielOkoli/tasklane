import type { Metadata } from 'next';
import '@fontsource-variable/dm-sans';
import './globals.css';
export const metadata: Metadata = { title: 'Tasklane — A little help. A lot of momentum.', description: 'A project task desk where AI proposes, you approve, and every action leaves a clear trail.' };
export default function Layout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
