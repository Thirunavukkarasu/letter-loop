import Page from "@/components/page";
import prismadb from "@/lib/db";
import { DataTable } from "@/components/data-table";

export default async function Subscribers() {
  const subscribers = await prismadb.subscribers.findMany();
  console.log(subscribers);

  return (
    <Page title="Subscribers">
      <p>This is a Subscribers page</p>
      <DataTable
        columns={[
          { header: "ID", accessorKey: "id" },
          { header: "Email", accessorKey: "email" },
          { header: "Created At", accessorKey: "createdAt" },
          { header: "Updated At", accessorKey: "updatedAt" },
        ]}
        data={subscribers}
      />
    </Page>
  );
}
