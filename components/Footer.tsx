export default function Footer() {
    return (
        <footer className="py-16 border-t border-white/5 text-white/50 text-sm">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    &copy; {new Date().getFullYear()} Live Lens. All rights reserved.
                </div>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                </div>
            </div>
        </footer>
    );
}
