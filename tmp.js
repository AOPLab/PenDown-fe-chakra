{ /* <>
                  <div
                    role="button"
                    tabIndex="0"
                  >
                    <Icon.AddButton onClick={clickAddNote}
                    <Icon.Notification />
                  </div>
                  <div
                    className={classes.userContainer}
                    onClick={toggleUser}
                    onKeyDown={toggleUser}
                    role="button"
                    tabIndex="-1"
                  >
                    <button type="button" className={classes.userButton} ref={userButtonRef}>
                      <Typography
                        variant="h6"
                        className={userButtonActive && !theme.headerStyle.hasIndicator ? classes.active : null}
                      >
                        <ResizeObserver onReflow={(rect) => setUserButtonRect(rect)} />
                        {user.username}
                      </Typography>
                    </button>
                    {userDropdown && (
                    <div className={classes.userDropdownContent} ref={userRef}>
                      {menuList.map((item) => (
                        <span
                          key={item.link}
                          tabIndex={item.link}
                          role="button"
                          onClick={() => goto(item.link)}
                          onKeyDown={() => goto(item.link)}
                        >
                          {item.title}
                        </span>
                      ))}
                    </div>
                    )}
                  </div>
                </> */ }
