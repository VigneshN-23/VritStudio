import { siteConfig } from '../../data';

export function Footer() {
  return (
    <footer className="py-8 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            {Object.entries(siteConfig.social).map(([platform, url]) => (
              <a 
                key={platform}
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-black transition-colors"
              >
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}