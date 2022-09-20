class Github {

  constructor() {
    this.client_id = '6c0aa27bb03816918582';
    this.client_secret = '8bdeec3bfb09826fd7577063cf4d6a999d6ea864';
    this.repos_count = 5;
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const repoResponse= await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();


    return{
      profile,
      repos
    }
  }
 
}