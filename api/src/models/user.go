package models

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Email      string `json:"email"`
	Password   string `json:"password"`
	Username   string `json:"username"`
	Posts      []Post `gorm:"foreignKey:UserID"`
	ProfilePic string `json:"profile_pic_filename"`
}

func (user *User) Save() (*User, error) {
	err := Database.Save(user).Error
	if err != nil {
		return &User{}, err
	}

	return user, nil
}

func FindUser(id string) (*User, error) {
	var user User
	err := Database.Where("id = ?", id).First(&user).Error

	if err != nil {
		return &User{}, err
	}

	return &user, nil
}

func FindUserByEmail(email string) (*User, error) {
	var user User
	err := Database.Where("email = ?", email).First(&user).Error

	if err != nil {
		return &User{}, err
	}

	return &user, nil
}

func FindUserByUsername(username string) (*User, error) {
	var user User
	err := Database.Where("username = ?", username).First(&user).Error

	if err != nil {
		return &User{}, err
	}

	return &user, nil
}
