var generateTargetTemplateStringES5 = function(timestamp, username, action) {
  return 'INFO - ' + timestamp + '\n' + username + ' : ' + action;
};

const generateTargetTemplateStringES6 = (timestamp, username, action) => `INFO - ${timestamp}\n${username} : ${action}`;

console.log(generateTargetTemplateStringES5('{timestamp}', '{username}', '{action}'));
console.log(generateTargetTemplateStringES6('{timestamp}', '{username}', '{action}'));
