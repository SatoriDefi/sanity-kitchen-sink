export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61358d50fece258954f78390',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-7zeq17gr',
                  apiId: '3dad12c5-e7b9-4d0d-84cb-fdf4f56b2751'
                },
                {
                  buildHookId: '61358d5121e0ddfc9ea0ea92',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-sxzpso1t',
                  apiId: '0b08b195-5ea2-44e8-9af4-8bd3e5416cae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SatoriDefi/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-sxzpso1t.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
