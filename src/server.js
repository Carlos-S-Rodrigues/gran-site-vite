var admin = require('firebase-admin')

var serviceAccount = require('path/to/serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

/*

{
  "type": "service_account",
  "project_id": "granprimus-5e39b",
  "private_key_id": "a8bf1d368aee33403a18d8a38df37215ad1b9617",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDdJ/pCCh4aIWDV\nCi1OVj5YVSr/SqEsn7khscPFeQ7PXACfjHbqmCKvqF65gpzrYEym+pFEdZCMAY0X\nKeNO6HR4F8idQmT8TDflQFK43FwYqeCaX7HPIEB67dlwfQohcczoy2c7vyIHdOmX\nnt6zjh+vGgglA9pnwimHDjsdkxXXyNABJJGvxDG6vCsLuFQQvtnY0CEHFALZ6x3u\noFF8w20EAQXoI+l1Ae2v07dp/8f5uBeoIF8TeRHNo3/RgfwWqrsbZki7nYKOT0p8\nJmhqUrhNKuiHepew9uXBVll6f1rZkLEtwR8A7tBOdI6+KIW+HhUSxRYhIbv6bEl4\nQ/djkKQtAgMBAAECggEAE0FJzromyMujLKlILIvhvbsclUGgKsx1R/O8QdM6cN9n\nxnxqVh6M1pJoPOqcUvn9coRaZYV+4lG4QQ4KlnIywcoAU4DWXgkczL7+9M1qz1Lr\nFUXDq275bjqLNfoNCcBowNQE1vTbN578P5E7fpKfO5Weo+pj96i2COY6S2bk/fZ6\neLQqNAJSWBHLtxsRCB8HqZmLM1nMr/tM+E+Jb7MIUPwqB8IXjlKAzfWI3fpiU9SH\n4R8gthTsdGmrEtDPJNaBgj9jbEFnDPnl/FlRoPb/Tx4GUwFsAIsGLN73I4IcbQ/R\nVAN/U0/XnQsKaAOeeFk0+1ks+V4KJGUJoa8rW9TRGQKBgQD6hJePgMze2wEdvx6O\nI8/F4/P701MebzmF7YbUi57+6YwywQcUNKp8PAeLlbN+rohr5QzMcfylEiT75H0e\nb6n1c1kIDffxbgXC3f7cYZArjJAEaA3KR0AIVBLsSp6a8O0PHj8PTNi84G6vk0NJ\n8g09mftZpLAp1N6YE0yzUb7qowKBgQDh/uZtwxZDyCAZA2+BDJsZq8P41dnV4+tt\nT2lE/BF/D8HEh78Yh8ObbN+EDkwX18E56Pyy+BeLRTlyOjExvswVwGsJD8ZCgWwf\nVx6TMyyZOD7Dai58B4DnqSbkU8261MxDZyMoEuDqBkP9W/oHfGZicFipcF/Tiltx\nYmrhlz1y7wKBgQC9NFEnj9arZeqU5diU79Unl3+ZLUT0knp2fSu88Wp3CjrZxlGr\nYA923vuv37N+NSFRo9+jtV9j6K1IFYyt5RYPDDwsyif+DuOJBpNLLOBvE61dtpzb\nri5dW+oizkS1rsrMBUMJMjfrhvHx5x4GBisb4GUmkix+m4g2gTUHpfC0UwKBgQDX\nmU/HgwfonjFQ66Aiox4MfXs2Fv38ObXN0KaC817VsviOP1qlUk/gJRuPZfxd+q0S\nTB1Xt6ruaJoHSVDJPlaAodL7EBt6MvIta/V1RKrVeX0W/GNgW+A0IYFC7lgkVwKP\ngwNdJbWATX3rZSXAooMigj9zVgt1Slc2cke484nh7QKBgADLf3ZA/GPFW57G6Kpv\nOcMOFN/zwwtlmGD/5neqb9OHRholiqCzcFZvDgMh2KQ8t95+C9u7AWt1Nxv467gQ\nEJ+EHP4OwLJ1DO8WypR5AVOkaAqetyDaz2eZ2oxXihX7glj7hfJwdR4meD5qeZDd\nVcV2t1/IecbSxIzZzMIbtK9q\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-nmlrt@granprimus-5e39b.iam.gserviceaccount.com",
  "client_id": "103628909217452621413",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-nmlrt%40granprimus-5e39b.iam.gserviceaccount.com"
}

*/
