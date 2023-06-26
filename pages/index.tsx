import Image from 'next/image'
import Link from "next/link";
import {MainLayout} from '@/components/layouts/MainLayout'


export default function Home() {
  return (
      <MainLayout>
          <div className={'description'}>
              <p>
                  Get started by editing&nbsp;
                  <code className={'code'}>pages/index.tsx</code>
              </p>
             <div>
                  <a
                      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      By{' '}
                      <Image
                          src="/vercel.svg"
                          alt="Vercel Logo"
                          className={'vercelLogo'}
                          width={100}
                          height={24}
                          priority
                      />
                  </a>
              </div>
          </div>

          <h1 className={'card'}>
              Get more info in <Link href="/about">About</Link>
          </h1>

          <div className={'center'}>
              <Image
                  className={'logo'}
                  src="/next.svg"
                  alt="Next.js Logo"
                  width={180}
                  height={37}
                  priority
              />
          </div>

          <div className={'grid'}>
              <a
                  href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  className={'card'}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <h2>
                      Docs <span>-&gt;</span>
                  </h2>
                  <p>
                      Find in-depth information about Next.js features and&nbsp;API.
                  </p>
              </a>

              <a
                  href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  className={'card'}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <h2>
                      Learn <span>-&gt;</span>
                  </h2>
                  <p>
                      Learn about Next.js in an interactive course with&nbsp;quizzes!
                  </p>
              </a>

              <a
                  href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  className={'card'}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <h2>
                      Templates <span>-&gt;</span>
                  </h2>
                  <p>
                      Discover and deploy boilerplate example Next.js&nbsp;projects.
                  </p>
              </a>

              <a
                  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  className={'card'}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <h2>
                      Deploy <span>-&gt;</span>
                  </h2>
                  <p>
                      Instantly deploy your Next.js site to a shareable URL
                      with&nbsp;Vercel.
                  </p>
              </a>
          </div>
      </MainLayout>
  )
}
