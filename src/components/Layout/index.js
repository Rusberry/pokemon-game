import s from "./style.module.css";

const Layout = ({ title, id, urlBg = false, colorBg = "none", children }) => {
  const bg = urlBg ? `url(${urlBg}) bottom no-repeat` : colorBg;

  return (
    <section className={s.root} id={id} style={{ background: bg }}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title} </h3>
            <span className={s.separator}></span>
          </div>
          <div className={`${s.desc} ${s.full}`}>{children}</div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
