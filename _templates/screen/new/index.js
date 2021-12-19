module.exports = {
  prompt: async ({ prompter }) => {
    const { name } = await prompter.prompt({
      type: 'input',
      name: 'name',
      message: "What's the name of your screen?",
    });

    if (name[0].toLowerCase() === name[0]) {
      console.log('Screens should be in Titlecase.');
      process.exit(1);
    }

    const fileName = `${name.toLowerCase()}/${name}`;
    const nameInCamelCase = name[0].toLowerCase() + name.substr(1);

    return {
      name,
      nameInCamelCase,
      path_from_root: `src/screens/${fileName}`,
      path_from_types: `./${name}/${name}`,
      path_from_components: `./screens${fileName}`,
    };
  },
};
