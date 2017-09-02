var CONFIG = {
  // index page
  index: "README.md",
  suffix: ".txt",

  // sidebar file
  sidebar_file: "https://api.github.com/repos/wuliupo/law/git/trees/master?recursive=1&callback=sq",

  // where the docs are actually stored on github - so you can edit
  base_url: "https://github.com/wuliupo/law/edit/master",
  git_url: "https://github.com/wuliupo/law",
};

// **************************
// DON'T EDIT FOLLOWING CODES
// **************************

addConfig(ditto, CONFIG);

function addConfig(obj, conf) {
  Object.keys(conf).forEach(function (key) {
    obj[key] = conf[key];
  });
}

