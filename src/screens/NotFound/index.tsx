import styles from './NotFound.module.scss';
import PageTitle from "components/PageTitle";
import PageLink from "../../components/PageLink";


export default function NotFound() {
  return (
    <div className={styles.home}>
      <PageTitle title={"404 - Not Found"} />
      <h1 className={styles.title}>
        Eitcha... Not Found...
      </h1>
      <PageLink to={"/"}>Voltar para o início</PageLink>
    </div>
  );
}
