import { getTurso } from "@/db";

import Form from "@/components/Form";

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

export const runtime = "edge";
