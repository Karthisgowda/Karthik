export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-text-secondary" data-testid="footer-text">
            © 2024 Karthik S Gowda. Crafted with{' '}
            <span className="text-red-500">❤️</span> and lots of{' '}
            <span className="text-accent">code</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
