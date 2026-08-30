import { PageHeader } from "../../components/ui/PageHeader";
import { ListSection, ListRow } from "../../components/ui/ListSection";
import { auditLog } from "../../data/mockData";

export default function AuditTrail() {
  return (
    <>
      <PageHeader title="Audit Trail" />
      <ListSection title="Recent Actions">
        {auditLog.map((a, i) => (
          <ListRow key={i} primary={`${a.action} — ${a.object}`} secondary={`${a.actor}`} right={a.time} />
        ))}
      </ListSection>
    </>
  );
}