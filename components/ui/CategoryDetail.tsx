interface CategoryDetailProps {
  description: string;
  skills: readonly string[];
}

export default function CategoryDetail({ description, skills }: CategoryDetailProps) {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-[#333333] text-base md:text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
        {description}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-white rounded-xl px-4 py-3 text-sm font-medium text-[#1D1D1F] border border-[#E0E0E0]"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
