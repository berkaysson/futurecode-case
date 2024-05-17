import "./MegaMenu.css";
import MegaMenuBanner from "./MegaMenuBanner";
import MegaMenuColumn from "./MegaMenuColumn";

const MEGAMENU_ITEMS = [
  {
    title: "Kurumsal",
    items: ["Hakkımızda", "Tarihçemiz", "Sponsorluklar", "İş Ortaklığı"],
    type: "normal",
  },
  {
    title: "İnsan Kaynakları",
    items: ["İnsan Kaynakları Politikamız", "Kariyer"],
    type: "normal",
  },
  {
    title: "Yönetim Sistemleri",
    items: [
      "Sertifikalarımız",
      "Politikalar",
      "Veri Gizliliği ve Güvenlik (KVKK)",
    ],
    type: "normal",
  },
  {
    title: "Lojistik Rehberi",
    items: ["Lojistik Terimler Sözlüğü"],
    type: "normal",
  },
  {
    title: "Sürdürülebilirlik",
    items: ["Yeşil Lojistik"],
    type: "green",
  },
];

/* eslint-disable jsx-a11y/anchor-is-valid */
const MegaMenu = ({ isActive }) => {
  return (
    <div className={`megamenu ${isActive ? "active" : ""}`}>
      <div className="row d-flex justify-content-center pb-5">
        <div className="row col-md-7 pb-2">
          <div className="d-flex flex-row flex-wrap gap-5">
            {MEGAMENU_ITEMS.map((item, index) => (
              <MegaMenuColumn
                key={"MegaMenuColumn" + index}
                title={item.title}
                items={item.items}
                type={item.type}
              />
            ))}
          </div>
        </div>
        <div className="col-md-3">
          <MegaMenuBanner />
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
