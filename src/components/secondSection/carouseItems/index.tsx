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
                    Desenvolvo trabalho social voluntário<br/>
                    com grupos familiares junto à Igreja<br/>
                    Videira, aqui na capital, desde 2007,<br/>
                    ajudando a transformar as vidas de<br/>
                    centenas de pessoas.
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
                    Sou técnico em Administração e, em minha<br/>
                    carreira, trabalhei como representante comercial<br/>
                    ao lado de importantes indústrias no Estado,<br/>
                    por isso conheço bem o Tocantins.
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
                    Como Deputado Estadual, quero lutar pelo <br/>
                    incentivo ao empreendedorismo, por <br/>
                    mais educação, saúde, mobilidade e <br/>
                    infraestrutura, e também lutarei <br/>
                    pelos interesses dos trabalhadores.

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