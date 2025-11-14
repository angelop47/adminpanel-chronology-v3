interface EventCardProps {
  id: string;
  title: string;
  date: string; // "2025-11-09"
  description: string;
  createdAt: string; // ISO string
  verified: boolean;
  imageUrl: string[];

  createdBy: {
    email: string;
    image_url: string;
  };

  category: {
    name: string;
  };
}

export const EventCard = ({
  title,
  date,
  description,
  imageUrl,
  createdBy,
  category,
  verified,
}: EventCardProps) => {
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-sky-700 rounded-xl shadow-lg p-5 text-white space-y-4">
        {/* Título */}
        <h2 className="text-2xl font-bold">{title}</h2>

        {/* Fecha */}
        <p className="text-sky-200 text-sm">{date}</p>

        {/* Descripción */}
        <p>{description}</p>

        {/* Imagen (si existe) */}
        {imageUrl?.length > 0 && (
          <div className="grid grid-cols-2 gap-3">
            {imageUrl.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Imagen ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg"
              />
            ))}
          </div>
        )}

        {/* Info del creador */}
        <div className="flex items-center gap-3 pt-2">
          <img
            src={createdBy.image_url}
            alt={createdBy.email}
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <div>
            <p className="text-sm">{createdBy.email}</p>
            <p className="text-xs text-sky-300">{category?.name}</p>
          </div>
        </div>

        {/* Verified badge */}
        {verified && (
          <span className="inline-block bg-green-500 px-3 py-1 rounded-full text-xs font-semibold">
            Verificado
          </span>
        )}
      </div>
    </div>
  );
};
