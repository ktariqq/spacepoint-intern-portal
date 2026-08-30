import { PageHeader } from "../components/ui/PageHeader";
import { ListSection, ListRow } from "../components/ui/ListSection";

export default function Reviews() {
  return (
    <>
      <PageHeader title="Weekly Mentor Review" subtitle="Friday, 16:00" />
      <ListSection title="Prepared for this review">
        <ListRow primary="Completed: Payload CAD enclosure, Wiring schematic" />
        <ListRow primary="In progress: ESP32 quantization, X-CUBE-AI candidate report" />
        <ListRow primary="Open question: Should the augmentation split be stratified by class?" />
        <ListRow primary="Blocker: none flagged" />
      </ListSection>
    </>
  );
}