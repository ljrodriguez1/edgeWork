import { getTurso } from "@/db";

import Form from "@/components/Form";

export const runtime = "edge";

export default function Home() {
  const database = getTurso();
  return (
    <main>
      <div>
        <Form />
      </div>
    </main>
  );
}
