'use client'
import Link from "next/link";
async function fetchContent(name) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(
    `https://api.github.com/repos/bradtraversy/${name}/contents`
  );

  const contents =await response.json();
  return contents;
}
const RepoContent =async ({ name }) => {
  const contents =await fetchContent(name);
  console.log(contents)
 const dirs = contents.filter((content) => content.type === "dir");
 console.log(dirs)
  return (
   
    <div>
      {dirs.map((dir) => (
        <li key={dir.path}>
          <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
        </li>
      ))}
    </div>
  );
};

export default RepoContent;
