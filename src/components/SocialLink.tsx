export interface SocialLinkProps {
  website: string;
  url: string;
}

export function SocialLink({ website, url }: SocialLinkProps) {
  return (
    <li>
      <a
        className="bg-gray-light hover:bg-green hover:text-gray-medium focus-visible:ring-green focus-visible:ring-offset-gray-dark block rounded-lg p-3 text-sm/normal font-bold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {website}
      </a>
    </li>
  );
}
