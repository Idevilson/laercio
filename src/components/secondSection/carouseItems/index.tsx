import React from 'react';
import styles from './styles.module.scss';
import Image from "next/image";

function CarouselItem1() {

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.abreAspasContainer}>
                    <Image
                        src="/assets/secondSection/abreAspas.png"
                        alt="Abre Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
            <div className={styles.body}>
                <h2 className={styles.text}>
                    Meu nome é Laércio Gaia e<br/>
                    sou tocantinense de coração.<br/>
                    Vivo em Palmas há 15 anos com<br/>
                    minha família.
                </h2>

            </div>
            <div className={styles.footer}>
                <div className={styles.fechaAspasContainer}>
                    <Image
                        src="/assets/secondSection/fechaAspas.png"
                        alt="fecha Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
        </div>
    )
}

function CarouselItem2() {

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.abreAspasContainer}>
                    <Image
                        src="/assets/secondSection/abreAspas.png"
                        alt="Abre Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
            <div className={styles.body}>
                <h2 className={styles.text}>
                    Desenvolvo trabalho social <br/>
                    voluntário com grupos familiares <br/>
                    junto à Igreja Videira, <br/>
                    aqui na capital, desde 2007, <br/>
                    ajudando a transformar as <br/>
                    vidas de centenas de pessoas.
                </h2>
            </div>
            <div className={styles.footer}>
                <div className={styles.fechaAspasContainer}>
                    <Image
                        src="/assets/secondSection/fechaAspas.png"
                        alt="fecha Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
        </div>
    )
}

function CarouselItem3() {

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.abreAspasContainer}>
                    <Image
                        src="/assets/secondSection/abreAspas.png"
                        alt="Abre Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
            <div className={styles.body}>
                <h2 className={styles.text}>
                    Sou técnico em Administração e, <br/>
                    em minha carreira, trabalhei <br/>
                    como representante comercial <br/>
                    ao lado de importantes indústrias <br/>
                    no Estado, por isso conheço <br/>
                    bem o Tocantins.
                </h2>
            </div>
            <div className={styles.footer}>
                <div className={styles.fechaAspasContainer}>
                    <Image
                        src="/assets/secondSection/fechaAspas.png"
                        alt="fecha Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
        </div>
    )
}

function CarouselItem4() {

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.abreAspasContainer}>
                    <Image
                        src="/assets/secondSection/abreAspas.png"
                        alt="Abre Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
            <div className={styles.body}>
                <h2 className={styles.text}>
                    O nosso Estado é rico, nosso povo<br/>
                    é forte e trabalhador, acredito<br/>
                    em seu desenvolvimento.

                </h2>
            </div>
            <div className={styles.footer}>
                <div className={styles.fechaAspasContainer}>
                    <Image
                        src="/assets/secondSection/fechaAspas.png"
                        alt="fecha Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
        </div>
    )
}

function CarouselItem5() {

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.abreAspasContainer}>
                    <Image
                        src="/assets/secondSection/abreAspas.png"
                        alt="Abre Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
            <div className={styles.body}>
                <h2 className={styles.text}>
                    Como Deputado Estadual, quero <br/>
                    lutar pelo incentivo ao <br/>
                    empreendedorismo, por mais <br/>
                    educação, saúde, mobilidade <br/>
                    e infraestrutura, de também <br/>
                    lutarei pelos interesses <br/>
                    dos trabalhadores.
                </h2>
            </div>
            <div className={styles.footer}>
                <div className={styles.fechaAspasContainer}>
                    <Image
                        src="/assets/secondSection/fechaAspas.png"
                        alt="fecha Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
        </div>
    )
}
export {
    CarouselItem1,
    CarouselItem2,
    CarouselItem3,
    CarouselItem4,
    CarouselItem5
};