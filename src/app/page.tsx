import Activities from "@/layout/Activities/Activities";
import Description from "@/layout/Description/Description";
import JoinUs from "@/layout/JoinUs/JoinUs";
import Main from "@/layout/Main/Main";
import Panel from "@/layout/Panel/Panel";
import Picture from "@/layout/Picture/Picture";

export default function Home() {
  return (
    <div>
      <main>
        <Main />
        <Picture />
        <Description />
        <Panel />
        <Activities />
        <JoinUs />
      </main>
      <footer></footer>
    </div>
  );
}
