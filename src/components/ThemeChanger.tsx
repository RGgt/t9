import { useEffect } from 'react';
import { themeChange } from 'theme-change';

export function ThemeChanger() {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <select className="gradientselect" data-choose-theme>
      <option disabled value="">
        Pick a theme
      </option>
      <option value="">Default</option>
      <option value="light">Light</option>
      <option value="dark">dark</option>
      <option value="cupcake">cupcake</option>
      <option value="bumblebee">bumblebee</option>
      <option value="emerald">emerald</option>
      <option value="corporate">corporate</option>
      <option value="synthwave">synthwave</option>
      <option value="cyberpunk">cyberpunk</option>
      <option value="valentine">valentine</option>
      <option value="halloween">halloween</option>
      <option value="garden">garden</option>
      <option value="forest">forest</option>
      <option value="aqua">aqua</option>
      <option value="lofi">lofi</option>
      <option value="pastel">pastel</option>
      <option value="fantasy">fantasy</option>
      <option value="wireframe">wireframe</option>
      <option value="luxury">luxury</option>
      <option value="dracula">dracula</option>
      <option value="cmyk">cmyk</option>
      <option value="autumn">autumn</option>
      <option value="business">business</option>
      <option value="acid">acid</option>
      <option value="lemonade">lemonade</option>
      <option value="night">night</option>
      <option value="coffee">coffee</option>
      <option value="winter">winter</option>
    </select>
  );
}
