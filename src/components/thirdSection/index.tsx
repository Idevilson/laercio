import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image'
import ReactPlayer from 'react-player/youtube'

export function ThirdSection() {

    return(
        <>
            <div className={styles.container} id="posicionamento">
                <div className={styles.centerContainer}>
                    <div className={styles.headerContent}>
                        <Image
                            src="/assets/thirdSection/posicionamentos.png"
                            alt="Posicionamentos"
                            width={531}
                            height={43}
                            quality={100}
                        />
                    </div>



                    <div className={styles.bodyVideoContainer}>
                        <ReactPlayer url='https://youtu.be/dXuSlAKMJSk' />
                    </div>

                    <div className={styles.footer}>
                            <div className={styles.card}>
                                <Image
                                    src="/assets/thirdSection/boy.png"
                                    alt="Ícone de um menino"
                                    width={69}
                                    height={69}
                                    quality={100}
                                />

                                <div className={styles.textBox}>
                                    <h2 className={styles.text}>
                                        Mais dignidade para <br/>
                                        nossas famílias
                                    </h2>
                                </div>
                            </div>

                        <div className={styles.card}>
                            <Image
                                src="/assets/thirdSection/hand.png"
                                alt="Ícone de uma mão"
                                width={69}
                                height={69}
                                quality={100}
                            />

                            <div className={styles.textBox}>
                                <h2 className={styles.text}>
                                    Incentivo ao <br />
                                    empreendedorismo
                                </h2>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src="/assets/thirdSection/money.png"
                                alt="Ícone do dinheiro"
                                width={69}
                                height={69}
                                quality={100}
                            />

                            <div className={styles.textBox}>
                                <h2 className={styles.text}>
                                    Pelo fortalecimento <br/>
                                    da nossa economia
                                </h2>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src="/assets/thirdSection/heart.png"
                                alt="Ícone do dinheiro"
                                width={69}
                                height={69}
                                quality={100}
                            />

                            <div className={styles.textBox}>
                                <h2 className={styles.text}>
                                    Lutarei por projetos <br/>
                                    para o crescimento do Estado
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.containerMobile} id="posicionamento">
                <div className={styles.centerContainerMobile}>
                    <div className={styles.headerContentMobile}>
                        <Image
                            src="/assets/thirdSection/posicionamentos.png"
                            alt="Posicionamentos"
                            width={531}
                            height={43}
                            quality={100}
                        />
                    </div>

                    <div className={styles.bodyVideoContainerMobile}>
                        <ReactPlayer
                            width={977}
                            height={550}
                            style={{
                                marginLeft: 100
                            }}
                            url='https://youtu.be/dXuSlAKMJSk'
                        />
                    </div>

                    <div className={styles.footerMobile}>
                        <div className={styles.cardMobile}>
                            <Image
                                src="/assets/thirdSection/boy.png"
                                alt="Ícone de um menino"
                                width={150}
                                height={150}
                                quality={100}
                            />

                            <div className={styles.textBoxMobile}>
                                <h2 className={styles.textMobile}>
                                    Mais dignidade para <br/>
                                    nossas famílias
                                </h2>
                            </div>
                        </div>

                        <div className={styles.cardMobile}>
                            <Image
                                src="/assets/thirdSection/hand.png"
                                alt="Ícone de uma mão"
                                width={150}
                                height={150}
                                quality={100}
                            />

                            <div className={styles.textBoxMobile}>
                                <h2 className={styles.textMobile}>
                                    Incentivo ao <br />
                                    empreendedorismo
                                </h2>
                            </div>
                        </div>

                        <div className={styles.cardMobile}>
                            <Image
                                src="/assets/thirdSection/money.png"
                                alt="Ícone do dinheiro"
                                width={150}
                                height={150}
                                quality={100}
                            />

                            <div className={styles.textBoxMobile}>
                                <h2 className={styles.textMobile}>
                                    Pelo fortalecimento <br/>
                                    da nossa economia
                                </h2>
                            </div>
                        </div>

                        <div className={styles.cardMobile}>
                            <Image
                                src="/assets/thirdSection/heart.png"
                                alt="Ícone do dinheiro"
                                width={150}
                                height={150}
                                quality={100}
                            />

                            <div className={styles.textBoxMobile}>
                                <h2 className={styles.textMobile}>
                                    Lutarei por projetos <br/>
                                    para o crescimento do Estado
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}