const colors = {
  text: 'blue',
  tint: 'red'
};

export default () => (
  <div className='container'>
    <p>
      This is { colors.text } text with a <a href="#">{ colors.tint} link</a>.
    </p>

    <style jsx global>{`
      body {
        color: ${ colors.text };
      }

      a:link,
      a:visited {
        color: ${ colors.tint };
      }
    `}</style>
  </div>
);
