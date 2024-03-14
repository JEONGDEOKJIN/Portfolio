import React from 'react'

const LogoJeong = () => {
  return (
    <>
          {/* Jeong! 로고 */}
        <a href="http://localhost:3000/">

          <div className="flex flex-row items-center justify-center ">
            <figure
              className="h-10 bg-center bg-no-repeat bg-contain w-36 shrink-0"
              style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/logo_Jeong.png)`,
                  // [사진 가져오는 url 참고] url(${process.env.PUBLIC_URL}/assets/images/${item.image})
                }}
                ></figure>
          </div>
        </a>
    </>
  )
}

export default LogoJeong