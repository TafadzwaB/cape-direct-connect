import Link from "next/link";

interface ServiceCardProps {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
}

export default function ServiceCard({
  slug,
  title,
  shortDescription,
  icon,
}: ServiceCardProps) {
  return (
    <Link
      href={`/${slug}`}
      className="group block bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 p-6 transition-all hover:-translate-y-1"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{shortDescription}</p>
      <span className="inline-block mt-4 text-blue-700 text-sm font-semibold group-hover:underline">
        Learn More →
      </span>
    </Link>
  );
}
