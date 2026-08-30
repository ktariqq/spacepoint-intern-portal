import { PageHeader } from "../components/ui/PageHeader";
import { ListSection, ListRow } from "../components/ui/ListSection";
import { internTalks } from "../data/mockData";

export default function InternTalks() {
  const upcoming = internTalks.filter((t) => t.status === "Upcoming");
  const past = internTalks.filter((t) => t.status === "Past");
  return (
    <>
      <PageHeader title="Intern Talks" />
      <ListSection title="Upcoming">
        {upcoming.map((t) => <ListRow key={t.title} primary={t.title} secondary={t.presenter} right={t.date} />)}
      </ListSection>
      <ListSection title="Past">
        {past.map((t) => <ListRow key={t.title} primary={t.title} secondary={t.presenter} right={t.date} />)}
      </ListSection>
    </>
  );
}