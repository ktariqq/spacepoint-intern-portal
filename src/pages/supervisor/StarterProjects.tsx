import { PageHeader } from "../../components/ui/PageHeader";
import { ListSection, ListRow } from "../../components/ui/ListSection";
import { starterProjects } from "../../data/mockData";

export default function StarterProjects() {
  return (
    <>
      <PageHeader title="Starter Project Library" subtitle="Reusable building blocks for personalized plans" />
      <ListSection title="Projects">
        {starterProjects.map((p) => <ListRow key={p.title} primary={p.title} secondary={p.domain} right={p.skills.join(", ")} />)}
      </ListSection>
    </>
  );
}