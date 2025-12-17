import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                    Live Lens
                </Link>
                <nav className="flex gap-8">
                    <Link href="#process" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                        How it works
                    </Link>
                    <Link href="#b2b" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                        For Business
                    </Link>
                </nav>
            </div>
        </header>
    );
}
