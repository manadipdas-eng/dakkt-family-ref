// Offline canned examples for the judging workflow.
// Illustrative cached responses only — these do NOT analyze uploaded media.
window.DEMO_DATA = {
  goal: {status:"success",title:"Goal detected (demo)",explanation:"The scripted example represents a ball crossing the goal line. A real judge must verify the actual clip before scoring.",evidence:"Demo scenario: ball fully crosses the goal line.",confidence:"High for this scripted example",points:1},
  nogol: {status:"success",title:"No goal (demo)",explanation:"The scripted example represents a shot passing outside the goal frame.",evidence:"Demo scenario: ball travels wide of the goal.",confidence:"High for this scripted example",points:0},
  quiz: {status:"success",title:"Correct answer (demo)",explanation:"The scripted example represents a spoken answer matching the answer key.",evidence:"Demo transcript matches the answer key.",confidence:"High for this scripted example",points:1},
  ring: {status:"success",title:"Ring toss success (demo)",explanation:"The scripted example represents a ring landing around the target peg.",evidence:"Demo scenario: ring surrounds the peg.",confidence:"Medium for this scripted example",points:1},
  unclear: {status:"review",title:"Insufficient evidence",explanation:"The result is not clear enough to judge fairly. Replay the moment or ask the players to review it.",evidence:"Demo scenario: camera angle obscures the result.",confidence:"Low",points:0}
};