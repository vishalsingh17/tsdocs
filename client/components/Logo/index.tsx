import React from "react";
import styles from "./index.module.scss";

const Index = ({ minWidth, maxWidth, fluidWidth, showAlpha }) => {
  return (
    <div
      style={{
        width: `clamp(${minWidth}, ${fluidWidth}, ${maxWidth})`,
        minWidth: minWidth,
        height: "auto",
      }}
      className={styles.logoContainer}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 65 15"
        style={{ width: "100%" }}
      >
        <path
          fill="#000"
          d="M14.336 12.12c-.552 0-1.048-.14-1.488-.42a3.063 3.063 0 0 1-1.044-1.164c-.248-.496-.372-1.068-.372-1.716 0-.632.124-1.196.372-1.692.256-.496.6-.888 1.032-1.176.44-.288.94-.432 1.5-.432.296 0 .58.048.852.144.28.088.528.212.744.372.224.16.404.34.54.54.136.192.212.396.228.612l-.432.072V3.12h1.704V12h-1.608l-.072-1.464.336.036c-.016.2-.088.392-.216.576-.128.184-.3.352-.516.504-.208.144-.448.26-.72.348-.264.08-.544.12-.84.12Zm.384-1.416c.32 0 .6-.08.84-.24.24-.16.428-.38.564-.66.136-.28.204-.608.204-.984a2.2 2.2 0 0 0-.204-.972 1.53 1.53 0 0 0-.564-.66c-.24-.16-.52-.24-.84-.24-.32 0-.6.08-.84.24a1.562 1.562 0 0 0-.552.66c-.128.28-.192.604-.192.972 0 .376.064.704.192.984.136.28.32.5.552.66.24.16.52.24.84.24Zm7.745 1.416c-.648 0-1.228-.14-1.74-.42a3.254 3.254 0 0 1-1.2-1.176c-.288-.496-.432-1.064-.432-1.704 0-.64.144-1.204.432-1.692a3.254 3.254 0 0 1 1.2-1.176c.512-.288 1.092-.432 1.74-.432.64 0 1.212.144 1.716.432.512.288.912.68 1.2 1.176.288.488.432 1.052.432 1.692 0 .64-.144 1.208-.432 1.704a3.139 3.139 0 0 1-1.2 1.176c-.504.28-1.076.42-1.716.42Zm0-1.488c.312 0 .592-.076.84-.228.248-.16.44-.376.576-.648.144-.28.216-.592.216-.936a1.97 1.97 0 0 0-.216-.936 1.516 1.516 0 0 0-.576-.648 1.516 1.516 0 0 0-.84-.24c-.32 0-.604.08-.852.24-.248.16-.444.376-.588.648a1.877 1.877 0 0 0-.204.936c-.008.344.06.656.204.936.144.272.34.488.588.648.248.152.532.228.852.228Zm7.27 1.488a3.11 3.11 0 0 1-1.632-.432c-.48-.288-.86-.68-1.14-1.176-.272-.496-.408-1.06-.408-1.692 0-.624.136-1.184.408-1.68.28-.504.66-.9 1.14-1.188a3.11 3.11 0 0 1 1.632-.432c.568 0 1.088.104 1.56.312.472.208.84.496 1.104.864l-.936 1.128a1.855 1.855 0 0 0-.42-.408 2.052 2.052 0 0 0-.552-.3 1.695 1.695 0 0 0-.6-.108 1.618 1.618 0 0 0-1.464.876 1.97 1.97 0 0 0-.216.936c0 .344.072.652.216.924.152.264.356.48.612.648.256.16.544.24.864.24.208 0 .404-.028.588-.084.184-.064.356-.156.516-.276.168-.12.32-.264.456-.432l.924 1.128c-.272.344-.648.624-1.128.84-.48.208-.988.312-1.524.312Zm5.76 0c-.592 0-1.12-.096-1.584-.288a2.889 2.889 0 0 1-1.104-.816l1.056-.912c.248.264.524.456.828.576.304.112.608.168.912.168.12 0 .228-.012.324-.036a1.01 1.01 0 0 0 .264-.12.503.503 0 0 0 .156-.192c.04-.08.06-.164.06-.252a.492.492 0 0 0-.216-.42 3.066 3.066 0 0 0-.372-.144 7.184 7.184 0 0 0-.648-.204 5.844 5.844 0 0 1-1.044-.36 2.5 2.5 0 0 1-.672-.48 2.024 2.024 0 0 1-.336-.54c-.072-.2-.108-.42-.108-.66 0-.288.064-.548.192-.78.128-.24.304-.444.528-.612.232-.168.496-.296.792-.384.296-.096.608-.144.936-.144.328 0 .648.04.96.12.312.08.6.196.864.348.272.144.508.316.708.516l-.912 1.008a2.938 2.938 0 0 0-.492-.372c-.176-.112-.36-.2-.552-.264a1.653 1.653 0 0 0-.516-.096c-.136 0-.26.012-.372.036a.794.794 0 0 0-.264.108.489.489 0 0 0-.168.192.585.585 0 0 0 .012.492c.048.08.112.148.192.204a3.3 3.3 0 0 0 .384.168c.176.064.412.136.708.216.384.104.708.22.972.348.272.128.488.276.648.444.136.144.236.308.3.492s.096.388.096.612c0 .392-.112.744-.336 1.056a2.197 2.197 0 0 1-.9.72 3.201 3.201 0 0 1-1.296.252Z"
        />
        <path
          fill="#CBD9ED"
          d="M40.488 12.132c-.312 0-.552-.088-.72-.264-.168-.176-.252-.428-.252-.756 0-.296.088-.536.264-.72a.937.937 0 0 1 .708-.288c.304 0 .54.088.708.264.168.176.252.424.252.744 0 .304-.088.552-.264.744-.176.184-.408.276-.696.276Z"
        />
        <path
          fill="#B8C3D3"
          d="M45.774 12.12c-.552 0-1.048-.14-1.488-.42a3.063 3.063 0 0 1-1.044-1.164c-.248-.496-.372-1.068-.372-1.716 0-.632.124-1.196.372-1.692.256-.496.6-.888 1.032-1.176.44-.288.94-.432 1.5-.432.296 0 .58.048.852.144.28.088.528.212.744.372.224.16.404.34.54.54.136.192.212.396.228.612l-.432.072V3.12h1.704V12h-1.608l-.072-1.464.336.036c-.016.2-.088.392-.216.576-.128.184-.3.352-.516.504-.208.144-.448.26-.72.348-.264.08-.544.12-.84.12Zm.384-1.416c.32 0 .6-.08.84-.24.24-.16.428-.38.564-.66.136-.28.204-.608.204-.984a2.2 2.2 0 0 0-.204-.972 1.53 1.53 0 0 0-.564-.66c-.24-.16-.52-.24-.84-.24-.32 0-.6.08-.84.24a1.562 1.562 0 0 0-.552.66c-.128.28-.192.604-.192.972 0 .376.064.704.192.984.136.28.32.5.552.66.24.16.52.24.84.24Zm7.805 1.416c-.688 0-1.288-.14-1.8-.42a3.08 3.08 0 0 1-1.2-1.152c-.288-.488-.432-1.048-.432-1.68 0-.488.08-.936.24-1.344.16-.408.384-.76.672-1.056a2.896 2.896 0 0 1 1.02-.696c.4-.168.832-.252 1.296-.252.432 0 .832.08 1.2.24.368.152.684.372.948.66.272.28.48.612.624.996.144.384.208.804.192 1.26l-.012.528h-5.1l-.276-1.044h3.972l-.192.216v-.264a1.122 1.122 0 0 0-.216-.588 1.214 1.214 0 0 0-.468-.408 1.429 1.429 0 0 0-.648-.144c-.352 0-.652.068-.9.204-.24.136-.424.336-.552.6-.128.264-.192.584-.192.96 0 .384.08.716.24.996.168.28.4.5.696.66.304.152.66.228 1.068.228.28 0 .536-.044.768-.132.232-.088.48-.24.744-.456l.816 1.14a3.637 3.637 0 0 1-.768.528c-.28.136-.568.24-.864.312a3.697 3.697 0 0 1-.876.108Zm5.774-.12-2.664-6.348h1.872l1.692 4.74-.396.072 1.776-4.812h1.824L61.045 12h-1.308Z"
        />
        <path
          fill="#2C75D5"
          d="M1.464 12V4.044h1.704V12H1.464ZM.276 7.176V5.652h4.188v1.524H.276Zm7.549 4.944c-.592 0-1.12-.096-1.584-.288a2.889 2.889 0 0 1-1.104-.816l1.056-.912c.248.264.524.456.828.576.304.112.608.168.912.168.12 0 .228-.012.324-.036a1.01 1.01 0 0 0 .264-.12.503.503 0 0 0 .156-.192c.04-.08.06-.164.06-.252a.492.492 0 0 0-.216-.42 3.066 3.066 0 0 0-.372-.144 7.184 7.184 0 0 0-.648-.204 5.844 5.844 0 0 1-1.044-.36 2.5 2.5 0 0 1-.672-.48 2.024 2.024 0 0 1-.336-.54c-.072-.2-.108-.42-.108-.66 0-.288.064-.548.192-.78.128-.24.304-.444.528-.612.232-.168.496-.296.792-.384.296-.096.608-.144.936-.144.328 0 .648.04.96.12.312.08.6.196.864.348.272.144.508.316.708.516l-.912 1.008a2.938 2.938 0 0 0-.492-.372c-.176-.112-.36-.2-.552-.264a1.653 1.653 0 0 0-.516-.096c-.136 0-.26.012-.372.036a.794.794 0 0 0-.264.108.489.489 0 0 0-.168.192.585.585 0 0 0 .012.492c.048.08.112.148.192.204a3.3 3.3 0 0 0 .384.168c.176.064.412.136.708.216.384.104.708.22.972.348.272.128.488.276.648.444.136.144.236.308.3.492s.096.388.096.612c0 .392-.112.744-.336 1.056a2.197 2.197 0 0 1-.9.72 3.201 3.201 0 0 1-1.296.252Z"
        />
      </svg>
      {showAlpha && <div className={styles.alpha}>alpha</div>}
    </div>
  );
};

export default Index;
