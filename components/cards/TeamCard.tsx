import { cn } from "@/lib/cn";

export type TeamMember = {
  name: string;
  position: string;
  credentials: string;
  bio: string;
  specialties: string[];
  languages: string[];
  photoAlt: string;
  photo?: string;
};

type TeamCardProps = {
  member: TeamMember;
  specialtiesLabel?: string;
  languagesLabel?: string;
  className?: string;
};

export function TeamCard({
  member,
  specialtiesLabel = "Specialties",
  languagesLabel = "Languages",
  className,
}: TeamCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-need bg-white shadow-card",
        className,
      )}
    >
      <div className="relative aspect-[4/5] bg-gradient-to-br from-need-green-100 via-need-cream to-need-orange-100">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.photoAlt}
            className="h-full w-full object-cover"
          />
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-need-ink">{member.name}</h3>
        <p className="mt-1 text-sm font-semibold text-need-orange">
          {member.position}
        </p>
        <p className="mt-2 text-sm text-need-muted">{member.credentials}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-need-ink">
          {member.bio}
        </p>

        <div className="mt-5 space-y-3 border-t border-need-border pt-4">
          <div>
            <p className="text-xs font-semibold tracking-wide text-need-green-700 uppercase">
              {specialtiesLabel}
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {member.specialties.map((item, index) => (
                <li
                  key={`${member.name}-specialty-${index}`}
                  className="rounded-full bg-need-green-100 px-3 py-1 text-xs font-medium text-need-green-900"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wide text-need-green-700 uppercase">
              {languagesLabel}
            </p>
            <p className="mt-1 text-sm text-need-muted">
              {member.languages.join(" · ")}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
