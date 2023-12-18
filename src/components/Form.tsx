import { getTurso } from "@/db";

const addData = async (data: FormData) => {
  "use server";

  console.time("myFunction");

  const database = getTurso();

  const result = await database.execute("select * from todo");

  console.timeEnd("myFunction");

  console.log(result);
  return data;
};

const syncDb = async () => {
  "use server";

  const database = getTurso();
  await database.sync();
};

export default async function Form() {
  return (
    <>
      <form action={addData}>
        <input
          type="text"
          name="description"
          id="description"
          alt="Todo Description"
        ></input>
        <label htmlFor="description">Todo Description</label>
        <button type="submit">Submit</button>
      </form>
      <form action={syncDb}>
        <button type="submit">Sync</button>
      </form>
    </>
  );
}
