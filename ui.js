import * as dat from 'dat.gui';
import * as tome from 'chromotome';

export default function(opts, full_reset, redraw, print) {
  const ctrls = {
    print: print,
    reset: full_reset
  };

  const gui = new dat.GUI();
  const f0 = gui.addFolder('Structural Changes');
  f0.open();
  f0.add(opts, 'cubedim', 2, 60, 2)
    .name('Cube Dimension')
    .onChange(full_reset);
  f0.add(opts, 'outerSize', 0.7, 1, 0.02)
    .name('Section Sizes')
    .onChange(full_reset);
  f0.add(opts, 'minGridSize', 1, 10, 1)
    .name('Min Grid Size')
    .onChange(full_reset);
  f0.add(opts, 'innerSize', 0.7, 1, 0.02)
    .name('Atom Sizes')
    .onChange(full_reset);
  f0.add(opts, 'colorMode', ['single', 'main', 'group', 'random'])
    .name('Color Distr.')
    .onChange(full_reset);
  f0.add(opts, 'palette', tome.getNames())
    .name('Palette')
    .onChange(full_reset);
  const f1 = gui.addFolder('Stylistic Changes');
  f1.open();
  f1.add(opts, 'tx', -600, 600, 50)
    .name('Translate X')
    .onChange(redraw);
  f1.add(opts, 'ty', -600, 600, 50)
    .name('Translate Y')
    .onChange(redraw);
  f1.add(opts, 'mag', 1, 8, 0.5)
    .name('Cell Size')
    .onChange(redraw);
  f1.add(opts, 'depthDim', 0, 10, 0.5)
    .name('Depth')
    .onChange(redraw);
  f1.add(opts, 'perspective', 0.55, 1, 0.05)
    .name('Perspective')
    .onChange(redraw);
  f1.add(opts, 'shadeOpacity', 0, 255, 5)
    .name('Shade Opacity')
    .onChange(redraw);
  f1.add(opts, 'strokeOpacity', 0, 255, 5)
    .name('Stroke Opacity')
    .onChange(redraw);
  f1.add(opts, 'strokeWeight', 1, 3, 1)
    .name('Stroke Weight')
    .onChange(redraw);
  const f2 = gui.addFolder('Control');
  f2.open();
  f2.add(ctrls, 'print').name('Download image');
  f2.add(ctrls, 'reset').name('Generate new');
}