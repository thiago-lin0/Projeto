import React from 'react'
import Link from 'next/link';

//styles
import styles from '../styles/index.module.css';

//components
import Menu from '../components/menu';
import Footer from '../components/footer';

export default function Home(){
  return (
    <>
      <Menu/>
      <header className="container vh-100">
        <div className={`${styles.headerRow} row align-items-center h-100`}>
          <div className="col-md-6 col-12 d-flex align-items-center">
            <img
            className={`${styles.leftHeaderImage} w-100`}
              width= '90%'
              src="/assets/Grupo_11.png"
              alt="Monitor de um computador com a interface do boost"
            />
          </div>
          <div className={`${styles.header} col-12 col-md-6 h-42`}>
            <div className={`${styles.rightHeaderTopCol}col-md-12 col-12 d-md-flex justify-content-md-start d-flex justify-content-center  h-38`}>
              <img
              className={`${styles.rightHeaderTopImage} w-50`}
                src="/assets/BoostLogo.png"
                alt="Logo do Boost"
              />
            </div>
            <div className="col-md-12 h-42">
              <p className={`${styles.rightHeaderMiddleColText}`}>
                Uma ferramenta para otimização de relatórios, transformando
                dados complexos em templates <b>simples.</b>
              </p>
            </div>
            <div className="col-md-12 h-42">
              <Link
                href="https://api.whatsapp.com/send?phone=5547988306835&text=Quero%20experimentar%20o%20Boost%20Reports%2007%20dias%20gr%C3%A1tis!%20"
                target="_blank"
              >
                <button
                  type="button"
                  className={`${styles.rightHeaderBottomButton} btn btn-primary h-100 w-75 mt-3 `}
                >
                  Experimentar 07 dias grátis
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/** SECOND LINE */}
      <section
        className={`${styles.secondLine} container-sm-12 h-50 w-auto d-flex align-items-center justify-content-center m-s-0 m-e-0`}
      >
        <p className={`${styles.secondLineText}`}>
          <em>"O Boost é a virada de chave na otimização de relatórios!"</em>
        </p>
      </section>

            {/* TERCEIRA LINHA*/}
      <section className={`${styles.thirdLine} container-sm-12`}>
        <div className= {`${styles.thirdLineRow} row align-items-center h-100 w-100`}>
          <div className="col-md-6">
            <img
              className={`${styles.thirdLineImage} w-100 h-100 pt-5 pb-5`}
              src="/assets/notebookImg.png"
            />
          </div>
        
          <div className="col-md-6">
            <div className="d-flex">
              <p className={`${styles.thirdLineTitleText} pt-5 pb-2`}>
                Com o Boost Reports você consegue...
              </p>
            </div>
            <div className="d-flex align-items-center">
              <div className="col-md-1">
                <img src="/assets/C.png" />
              </div>
              <div className="col-md-10">
                <p className={`${styles.thirdLineText} pe-3 `}>
                  Junção de todos os relatórios, de todos sistemas que sua
                  empresa utiliza, em um só lugar!
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="col-md-1">
                <img src="/assets/C.png" />
              </div>
              <div className="col-md-10">
                <p className={`${styles.thirdLineText}  pe-3 `}>
                  Dashboards e indicadores gerados diretamente no excel;
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="col-md-1">
                <img src="/assets/C.png" />
              </div>
              <div className="col-md-10">
                <p className={`${styles.thirdLineText} pe-3 `}>
                  Possibilitar construção de relatórios usando html com alta
                  performance na criação e execução;
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="col-md-1">
                <img src="/assets/C.png" />
              </div>
              <div className="col-md-10">
                <p className={`${styles.thirdLineText} pe-3 `}>
                  Controle de versão (alterne para a versão que quiser com
                  apenas 2 cliques);
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="col-md-1">
                <img src="/assets/C.png" />
              </div>
              <div className="col-md-10">
                <p className={`${styles.thirdLineText} pe-3 `}>
                  Atualização da versão em produção com apenas 2 cliques;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* QUARTA LINHA*/}
      <section
        className={`${styles.fourthLine} container-md-12 d-flex justify-content-center align-items-center h-400 w-auto`}
      >
        <div className="row d-flex align-items-center h-100 w-100 pt-5 pb-5">
          <div className="col-md-6">
            <div className="d-flex">
              <div className="col-md-6 d-flex align-self-center">
                <img className="mw-100 mh-100 " src="/assets/Grupo_12.png" />
              </div>
              <div className="col-md-6 d-flex align-self-center">
                <p className={`${styles.fourthLineText} text-start  pe-3 fs-3`}>
                  O cliente (confidencial) recebeu propostas de orçamento
                  estimando 44 horas totais de desenvolvimento previstas para
                  solução
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex">
              <div className="col-md-6" id="fourthLineImage">
                <img className="mw-100 mh-100" src="/assets/Grupo_13.png" />
              </div>
              <div className="col-md-6 d-flex align-self-center">
                <p className={`${styles.fourthLineText} text-start  pe-3 fs-3`}>
                  Com o Boost, a solução foi entregue em 02h, com a mesma
                  performance garantida!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUINTA LINHA*/}
      <section>
        <div className="container-md-12">
          <iframe
            className={`${styles.fifthLineVideo} h-45`}
            src="https://drive.google.com/file/d/14NOEDTmieUUR-ujlDIDYYk56na6wqLqX/preview"
            allow="autoplay"
          ></iframe>
        </div>
        <div className={`${styles.fifthLine} container-md-12 d-flex justify-content-center align-items-center text-center pt-4`} >
          <div className={`${styles.ColTitleFifthLine} row d-flex flex-column justify-content-center align-items-center `}>
            <div className={`${styles.ColTitleFifthLine}col-md-12`}>
              <p className={`${styles.fifthLineTitleText} ps-0 pe-0`}>Experimente o Boost agora mesmo!</p>
            </div>
            <div>
              <p className={`${styles.fifthLineText} offset-md-2 col-md-8 offset-md-2`}>
                Transformar informações complexas em relatórios personalizados
                (e simples!) nunca foi tão fácil.
              </p>
            </div>
            <div className={`${styles.ColTitleFifthLine} col-md-12`}>
              <a
                href="https://api.whatsapp.com/send?phone=5547988306835&text=Quero%20experimentar%20o%20Boost%20Reports%2007%20dias%20gr%C3%A1tis!%20"
                target="_blank"
              >
                <button
                  type="button"
                  className={`${styles.fifthLineButton} btn btn-primary`}
                >
                  Experimentar 07 dias grátis
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <Footer/>                 
    </>
  )
}