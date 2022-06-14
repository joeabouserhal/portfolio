import React from 'react'

const Technologies = () => {

    const containerStyle = 'container font-mono bg-slate-700 text-slate-300 mx-auto h-auto text-center rounded-2xl p-5 max-w-sm shadow-2xl lg:text-xl';
    const innerContainerStyle = 'container text-md font-mono bg-slate-700 text-slate-300 mx-auto h-auto text-center rounded-2xl p-5 h-50 max-w-sm shadow-2xl';

    return (
        <div>
            <div className='title flex justify-center'>
                <h1 className='text-3xl font-mono'>Languages and Tools</h1>
            </div>
            <div className='flex flex-col gap-y-10 lg:flex-row pt-16'>
                <div className={containerStyle}>
                    <h3 className='text-2xl p-2'>Languages</h3>
                    <ul className='text-base'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>Flutter</li>
                        <li>SQL</li>
                        <li>Firebase</li>

                    </ul>
                </div>
                <div className={containerStyle}>
                    <h3 className='text-2xl p-2'>Tools</h3>
                    <ul className='text-base'>
                        <li>Visual Studio Code</li>
                        <li>PyCharm</li>
                        <li>IntelliJ</li>
                        <li>Git</li>
                        <li>Sublime Code</li>
                        <li>Android Studio</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Technologies