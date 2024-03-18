export default function Legal() {
  return (
    <main className="flex flex-col items-center ">
      <div className="p-4 max-w-2xl flex flex-col items-center">
        <h1
          className="animate-text bg-gradient-to-r 
            from-[#c32d6b] via-purple-500  to-[#CF4225] 
						bg-clip-text text-3xl font-semibold
            text-transparent"
        >
          Legal Imprint / Impressum
        </h1>
        <br></br>
        <div className="text-md mt-1 text-gray-400">
          <p>Responsible according to § 5 TMG:</p>
          <p>Matthias Ehm</p>
          <p>Nietzschestr. 28</p>
          <p>80807 München</p>
          <p>
            eMail:{' '}
            <a
              className="underline"
              href="mailto:mat@matehm.com"
            >
              mat@matehm.com
            </a>
          </p>
          <p>Tel.: 0049 89 20032270</p>

          <div>
            EU platform for out-of-court online dispute resolution:{' '}
            <a
              className="underline"
              href="https://ec.europa.eu/consumers/odr/"
            >
              https://ec.europa.eu/consumers/odr/
            </a>{' '}
          </div>
        </div>
      </div>
    </main>
  );
}
