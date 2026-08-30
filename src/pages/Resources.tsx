import { PageHeader } from "../components/ui/PageHeader";
import { ListSection, ListRow } from "../components/ui/ListSection";
import { learningResources } from "../data/mockData";

export default function Resources() {
  return (
    <>
      <PageHeader title="Resource Library" />
      <ListSection title="All Resources">
        {learningResources.map((r) => (
          <ListRow key={r.id} primary={r.title} secondary={`${r.domain} · ${r.difficulty}`} right={`${r.minutes} min`} />
        ))}
      </ListSection>
    </>
  );
}