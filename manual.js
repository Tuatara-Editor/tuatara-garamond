window.tuataraManualText = {"01-what-garamond-is":" what garamond is a package that keeps one space or two after a full stop, as the document itself says. how far apart sentences are is a property of a document, not of the person who edits it. so garamond reads it from the document, from its own local variables: block: # local variables: # sentence-end-double-space: t # end: t means two spaces after a sentence's end, nil means one. a file that says nothing is left alone. where it does say, typing, filling and the sentence commands follow the spacing the file asks for. it is a package, not part of the editor. it is made from the emacs package of the same name, by the same author.","01-what-garamond-is#seeing-that-it-works":"1.1 seeing that it works open a file with a local variables: block that says sentence-end-double-space: t . the mode line shows 2s . 1s means the file asks for one space between sentences.","01-what-garamond-is#what-this-manual-covers":"1.2 what this manual covers chapter 2 says how to tell a buffer its spacing, and how to change a whole text to match. chapter 3 says what typing does and where a second space goes. chapter 4 lists the settings and describes the command that says why nothing happens. chapter 5 lists every command and setting.","02-setting-and-changing-the-spacing":" setting and changing the spacing say how far apart a buffer's sentences are, and make the text match.","02-setting-and-changing-the-spacing#saying-it":"2.1 saying it m-x garamond-set-spacing says how many spaces, 1 or 2, are between the buffer's sentences. it changes none of the text. filling, the sentence commands and typing follow the number from then on. a count gives it, as in c-u 2 m-x garamond-set-spacing . without a count, the command asks, and offers the buffer's own spacing. when the buffer's file does not say its spacing yet, the command asks whether to write it in the file's local variables: block. the file keeps it from then on. a file that says already is kept up to date without asking. the buffer is left modified and not saved. the command also turns garamond-mode on, unless the buffer is one the mode never runs in (chapter 4). modal non-modal command what it does none m-x garamond-set-spacing garamond-set-spacing say how many spaces, 1 or 2, are between the current buffer's sentences, changing none of its text: filling, the sentence commands and typing (m-x garamond-mode, switched on) follow it.","02-setting-and-changing-the-spacing#making-the-text-match":"2.2 making the text match m-x garamond-adjust-spacing does the same and then changes the text. every gap after a sentence's end in the selection, or in the whole buffer when there is no selection, becomes 1 or 2 spaces, as one change. a sentence's end is . , ? , ! , … or ‽ after a letter, with any closing quotes or brackets, and more text on the same line. the gap after an abbreviation (for example dr.) is made one space, as filling leaves it. a list item's number, line breaks, indentation and anything that is not prose are left as they are (chapter 3). a count gives the spacing and otherwise it is asked. whether to write the spacing in the file is asked only when the whole buffer is changed. when it has finished, the command says how many sentence breaks it made, and how many gaps after abbreviations it made one space. modal non-modal command what it does none m-x garamond-adjust-spacing garamond-adjust-spacing make every run of spaces after a sentence's end in the selection, or the whole buffer without one, 1 or 2 spaces, as one change, then say the buffer uses that spacing as m-x garamond-set-spacing does.","02-setting-and-changing-the-spacing#in-the-file":"2.3 in the file a file can also turn the mode on by name, in its own settings: -*- mode: org; mode: garamond -*- the mode is not turned on if the buffer is one it never runs in. a file whose own settings are off (the editor's *file-local-variables* setting) is never written to by these commands. they say so instead.","03-typing-and-where-a-second-space-goes":" typing and where a second space goes what garamond-mode does as you type, and where it leaves the text alone.","03-typing-and-where-a-second-space-goes#the-mode":"3.1 the mode m-x garamond-mode makes one space typed after a sentence's end two, or stops doing so. it acts only while the buffer's sentences are two spaces apart. the mode line says 2s then. while they are one apart it says 1s , and the mode waits. it also acts only in prose, and never after an abbreviation or a list item's number. a run of more spaces typed is made two. a count turns it on when it is positive and off when it is zero or less. it is turned on by itself in a file that says its spacing, and by garamond-set-spacing and garamond-adjust-spacing . m-x garamond-follow-declarations-mode turns that starting by itself on or off, for files opened after it. its setting, *garamond-follow-declarations* , is on when the package is loaded. modal non-modal command what it does none m-x garamond-mode garamond-mode make one space typed after a sentence's end two in the current buffer, or stop. none m-x garamond-follow-declarations-mode garamond-follow-declarations-mode have a file that says how far apart its sentences are switch m-x garamond-mode on as it is opened, or stop ( garamond-follow-declarations , on as the package is loaded).","03-typing-and-where-a-second-space-goes#where-a-second-space-goes":"3.2 where a second space goes only where prose is written: in a text mode (org, markdown, plain text and the rest), never in code, tables, links, maths or a block's contents. org's parse, or the language's syntax tree, tells which is which; in any other language, only in its comments. where a language has a syntax tree that is not ready yet, nothing is doubled.","03-typing-and-where-a-second-space-goes#abbreviations":"3.3 abbreviations a word whose full stop shortens it (for example dr. or sept.) ends no sentence. the abbreviations are tuatara's own, the ones its sentence commands and filling pass over. add your own with *extra-sentence-abbreviations* and take any of tuatara's out with *removed-sentence-abbreviations* , both in the init file. chapter 2 of tuatara's manual covers the sentence commands.","03-typing-and-where-a-second-space-goes#what-a-sentences-end-is":"3.4 what a sentence's end is a letter, then . , ? , ! , … or ‽ , then any closing quotes or brackets. a list item's number (1. or 10.) ends no sentence, because no letter comes before its full stop.","04-settings-and-finding-out-why":" settings and finding out why nothing happens the settings, and the command that says what garamond does in a buffer.","04-settings-and-finding-out-why#the-settings":"4.1 the settings set them in the package's :config in your init file: (load-package \"garamond\" :source \"https://github.com/tuatara-editor/tuatara-garamond\" :config (setf *garamond-mode-line* nil)) setting default values what it changes *garamond-double-space-on-typing* t t, nil whether one space typed after a sentence's end becomes two. *garamond-persist* t t, nil whether m-x garamond-set-spacing and m-x garamond-adjust-spacing ask to write the spacing in the file. *garamond-follow-declarations* t t, nil whether a file that says how far apart its sentences are has m-x garamond-mode on as it is opened. *garamond-mode-line* t t, nil whether the mode line says a buffer's spacing while m-x garamond-mode is on in it. *garamond-unsuitable-modes* (special-mode) a list, each a mode's name the major modes m-x garamond-mode never runs in. special-mode covers the lists, help and terminals tuatara makes, where nobody writes prose. garamond will not turn on there and says so.","04-settings-and-finding-out-why#finding-out-why":"4.2 finding out why m-x garamond-doctor shows in a *help* buffer what garamond does in the current buffer and why. it lists: the buffer's major mode, and whether its file says its spacing; the spaces between sentences in force, and where they come from when the file does not say; whether garamond-mode is on, and why it will not run when that is so; where a second space goes, and what the mode line says; the settings, and how many abbreviations are in force (tuatara's, those removed and yours); the likeliest reason for what you see, in a sentence or two. press r there to look again after a change. modal non-modal command what it does none m-x garamond-doctor garamond-doctor show in help what garamond does in the current buffer and why: whether its file says its spacing, the spacing in force, whether m-x garamond-mode is on and where a second space goes, the settings, and the likeliest reason for what is seen.","05-every-command-and-setting":" every command and setting each command and setting of garamond, to look one up by name. the tables are made from the program each time this manual is made, so they never list a command or setting that garamond does not have. the first table has four columns. the first two are keys: the modal keys, which work only with modal editing on, and the non-modal keys, which work with it off too. a command with no key says m-x and its name in the second column, because you can only run it by its name. the third column is the name of the command and the fourth says what it does. to run a command by its name, press m-x , type a few letters of the name and press ret . to find a command from within the editor, press c-h f . to find the command that a key runs, press c-h k and then the key. the editor's own settings and commands are in chapters 21 and 22 of its manual.","05-every-command-and-setting#every-command":"5.1 every command modal non-modal command what it does none m-x garamond-adjust-spacing garamond-adjust-spacing make every run of spaces after a sentence's end in the selection, or the whole buffer without one, 1 or 2 spaces, as one change, then say the buffer uses that spacing as m-x garamond-set-spacing does. none m-x garamond-doctor garamond-doctor show in help what garamond does in the current buffer and why: whether its file says its spacing, the spacing in force, whether m-x garamond-mode is on and where a second space goes, the settings, and the likeliest reason for what is seen. none m-x garamond-follow-declarations-mode garamond-follow-declarations-mode have a file that says how far apart its sentences are switch m-x garamond-mode on as it is opened, or stop ( garamond-follow-declarations , on as the package is loaded). none m-x garamond-mode garamond-mode make one space typed after a sentence's end two in the current buffer, or stop. none m-x garamond-set-spacing garamond-set-spacing say how many spaces, 1 or 2, are between the current buffer's sentences, changing none of its text: filling, the sentence commands and typing (m-x garamond-mode, switched on) follow it.","05-every-command-and-setting#every-setting":"5.2 every setting setting default values what it changes *garamond-double-space-on-typing* t t, nil whether one space typed after a sentence's end becomes two. *garamond-follow-declarations* t t, nil whether a file that says how far apart its sentences are has m-x garamond-mode on as it is opened. *garamond-mode-line* t t, nil whether the mode line says a buffer's spacing while m-x garamond-mode is on in it. *garamond-persist* t t, nil whether m-x garamond-set-spacing and m-x garamond-adjust-spacing ask to write the spacing in the file. *garamond-unsuitable-modes* (special-mode) a list, each a mode's name the major modes m-x garamond-mode never runs in."};
// The manual's pages: filter the contents column to the headings whose title or
// text holds what is typed in its box, and change between light and dark
// colours (the choice kept in this browser for the next page). The entry for
// the part being read is marked as the page scrolls. The text of
// every section comes before this script, in window.tuataraManualText, made
// when the manual is built. Links are left alone. No address is ever loaded.
(function () {
  var root = document.documentElement;
  var key = "tuatara-manual-theme";
  var saved = null;
  try { saved = window.localStorage.getItem(key); } catch (e) { saved = null; }
  if (saved === "light" || saved === "dark") { root.setAttribute("data-theme", saved); }

  function dark() {
    var chosen = root.getAttribute("data-theme");
    if (chosen) { return chosen === "dark"; }
    return Boolean(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
  }

  var button = document.querySelector("button.theme");
  if (button) {
    var label = function () {
      button.textContent = dark() ? "Light" : "Dark";
      button.setAttribute("aria-label", dark() ? "Use light colours" : "Use dark colours");
    };
    button.hidden = false;
    label();
    button.addEventListener("click", function () {
      var next = dark() ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { window.localStorage.setItem(key, next); } catch (e) { /* kept for this page only */ }
      label();
    });
  }

  var nav = document.querySelector("nav.toc");
  var box = nav && nav.querySelector("input");
  if (!box) { return; }
  var texts = window.tuataraManualText || {};

  // The key of a section in the text: a chapter's page name without its
  // ending, then # and the heading's id. On the page of every chapter the
  // links are "10-directories.html#marks", on the whole manual "#10-directories--marks".
  function keyOf(href) {
    var parts = /^#?([0-9]+-[^#.]*?)(?:\.html)?(?:(?:#|--)(.*))?$/.exec(href || "");
    if (!parts) { return null; }
    return parts[2] ? parts[1] + "#" + parts[2] : parts[1];
  }

  // Show ITEM when its title or text holds WORDS, or any entry under it does.
  function show(item, words) {
    var link = item.querySelector(":scope > a");
    var title = link ? link.textContent.toLowerCase() : "";
    var text = (link && texts[keyOf(link.getAttribute("href"))]) || "";
    var hit = words === "" || title.indexOf(words) !== -1 || text.indexOf(words) !== -1;
    item.querySelectorAll(":scope > ol > li").forEach(function (inner) {
      if (show(inner, words)) { hit = true; }
    });
    item.classList.toggle("hidden", !hit);
    return hit;
  }

  box.addEventListener("input", function () {
    var words = box.value.trim().toLowerCase().replace(/\s+/g, " ");
    nav.classList.toggle("filtering", words !== "");
    nav.querySelectorAll("ol.chapters > li").forEach(function (item) { show(item, words); });
  });

  // The entry of the column for the part being read is marked, following as
  // the page is scrolled: the last heading that has reached the middle of
  // the window, and the entries it is under, so a section folded out of sight
  // leaves the section holding it marked. On the whole manual, where no chapter is marked as the one
  // shown, its chapter is unfolded too.
  var whole = !nav.querySelector("li.here");
  var here = location.pathname;
  var marks = [];
  nav.querySelectorAll("ol.chapters a").forEach(function (link) {
    var url = new URL(link.href, location.href);
    if (url.pathname !== here) { return; }
    var target = url.hash ? document.getElementById(decodeURIComponent(url.hash.slice(1)))
                          : document.querySelector("main h1");
    if (target) { marks.push({ link: link, target: target, top: 0 }); }
  });
  if (marks.length === 0) { return; }
  var marked = null;

  function measure() {
    marks.forEach(function (mark) { mark.top = mark.target.getBoundingClientRect().top + window.scrollY; });
    marks.sort(function (a, b) { return a.top - b.top; });
  }

  // Mark or unmark the entry of MARK and every entry it is under.
  function light(mark, on) {
    for (var item = mark.link.closest("li"); item && nav.contains(item); item = item.parentElement.closest("li")) {
      item.querySelector(":scope > a").classList.toggle("in-view", on);
    }
  }

  // Keep LINK in view in whichever part of the column scrolls.
  function reveal(link) {
    [nav, nav.querySelector("ol.chapters")].forEach(function (box) {
      if (!box || box.scrollHeight <= box.clientHeight) { return; }
      var outer = box.getBoundingClientRect();
      var inner = link.getBoundingClientRect();
      if (inner.top < outer.top) { box.scrollTop -= outer.top - inner.top + 24; }
      else if (inner.bottom > outer.bottom) { box.scrollTop += inner.bottom - outer.bottom + 24; }
    });
  }

  // Mark the entry of the last heading at or above the middle of the
  // window, the first when none is: a search in the measured places, the
  // page changed only when the entry is another.
  function follow() {
    var line = window.scrollY + window.innerHeight / 2;
    var low = 0, high = marks.length - 1, found = marks[0];
    while (low <= high) {
      var middle = (low + high) >> 1;
      if (marks[middle].top <= line) { found = marks[middle]; low = middle + 1; } else { high = middle - 1; }
    }
    if (found === marked) { return; }
    if (marked) { light(marked, false); }
    marked = found;
    light(marked, true);
    if (whole) {
      var chapter = marked.link.closest("ol.chapters > li");
      nav.querySelectorAll("ol.chapters > li.here").forEach(function (item) {
        if (item !== chapter) { item.classList.remove("here"); }
      });
      if (chapter) { chapter.classList.add("here"); }
    }
    reveal(marked.link);
  }

  // Measure again when pictures have loaded or the window changed size.
  function again() {
    measure();
    if (marked) { light(marked, false); }
    marked = null;
    follow();
  }

  measure();
  follow();
  window.addEventListener("scroll", follow, { passive: true });
  window.addEventListener("resize", again);
  window.addEventListener("load", again);
}());
