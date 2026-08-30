import { PageHeader } from "../components/ui/PageHeader";
import { ListSection, ListRow } from "../components/ui/ListSection";
import { communityPosts } from "../data/mockData";

export default function Community() {
  return (
    <>
      <PageHeader title="Community" subtitle="Technical discussion between interns" />
      <ListSection title="Discussions">
        {communityPosts.map((p) => <ListRow key={p.title} primary={p.title} secondary={p.author} right={`${p.replies} replies`} />)}
      </ListSection>
    </>
  );
}