import { PageHeader } from "../components/ui/PageHeader";
import { ListSection, ListRow } from "../components/ui/ListSection";
import { announcements } from "../data/mockData";

export default function Announcements() {
  return (
    <>
      <PageHeader title="Announcements" />
      <ListSection title="Updates">
        {announcements.map((a) => (
          <ListRow key={a.title} primary={a.title} secondary={a.date} right={a.mandatory ? "Acknowledge" : undefined} />
        ))}
      </ListSection>
    </>
  );
}