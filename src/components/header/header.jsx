import React from 'react'
import styles from './header.module.css'
import Image from 'next/image'
import nextConfig from '../../../next.config'
export const Header= ({isSearchOpen,setSearchStatus}) => {
  return (
    <>
    <header className={styles.header}>
        <div className={styles.timingHeader}>Timings For The Ordering Are 2:00 pm - 2:00 am!</div>
        <div className={styles.headerRest}>
            <div className={styles.headerFirst}>
                <div className={styles.headerLocation}>
                    <Image
                        src={`${nextConfig.basePath}/images/location.svg`}
                        width={300}
                        height={300}
                        alt='location image'
                    />
                </div>
                <div className={styles.headerLocationDetails}>
                    <div className={styles.headerCurrentLocation}>
                        <div className={styles.hCLtext}>Current Location</div>
                        <Image
                            src={`${nextConfig.basePath}/images/arrowDown.svg`}
                            width={50}
                            height={50}
                            alt='arrowDown image'
                            className={styles.hCLimg}
                        />
                    </div>
                    <div className={styles.headerNearestBranch}>DHA</div>
                </div>
            </div>
            <div className={styles.headerSecond}>
                <Image
                    src={``}
                    width={300}
                    height={300}
                    alt=''
                />
            </div>
            <div className={styles.headerThird}>
                <div className={`${styles.headerSearchBar} ${isSearchOpen ? styles.headerSearchBarOpen : styles.headerSearchBarClosed}`}>
                    <input placeholder='Search for Product' type="text" />
                </div>
                <div className={styles.headerOptions}>
                    <div className={styles.headerSearch} onClick={()=>{setSearchStatus(!isSearchOpen)}}>
                        <Image
                            src={`${nextConfig.basePath}/images/search.svg`}
                            width={300}
                            height={300}
                            alt='search logo'
                        />
                    </div>
                    <div className={styles.headerProfile}>
                        <Image
                            src={`${nextConfig.basePath}/images/profile.svg`}
                            width={300}
                            height={300}
                            alt='profile logo' 
                        />
                    </div>
                    <div className={styles.headerBag}>
                        <Image
                            src={`${nextConfig.basePath}/images/bag.svg`}
                            width={300}
                            height={300}
                            alt='bag logo' 
                        />
                        <div className={styles.headerBagAbsolute}>9</div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}
